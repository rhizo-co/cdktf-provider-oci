# `dataOciIdentityTagStandardTagNamespaceTemplate` Submodule <a name="`dataOciIdentityTagStandardTagNamespaceTemplate` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityTagStandardTagNamespaceTemplate <a name="DataOciIdentityTagStandardTagNamespaceTemplate" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template oci_identity_tag_standard_tag_namespace_template}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplate } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate(scope: Construct, id: string, config: DataOciIdentityTagStandardTagNamespaceTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig">DataOciIdentityTagStandardTagNamespaceTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig">DataOciIdentityTagStandardTagNamespaceTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityTagStandardTagNamespaceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplate } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplate } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplate } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplate } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityTagStandardTagNamespaceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityTagStandardTagNamespaceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityTagStandardTagNamespaceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityTagStandardTagNamespaceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tagDefinitionTemplates">tagDefinitionTemplates</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceNameInput">standardTagNamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceName">standardTagNamespaceName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagDefinitionTemplates`<sup>Required</sup> <a name="tagDefinitionTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tagDefinitionTemplates"></a>

```typescript
public readonly tagDefinitionTemplates: DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `standardTagNamespaceNameInput`<sup>Optional</sup> <a name="standardTagNamespaceNameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceNameInput"></a>

```typescript
public readonly standardTagNamespaceNameInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `standardTagNamespaceName`<sup>Required</sup> <a name="standardTagNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.standardTagNamespaceName"></a>

```typescript
public readonly standardTagNamespaceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityTagStandardTagNamespaceTemplateConfig <a name="DataOciIdentityTagStandardTagNamespaceTemplateConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplate } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityTagStandardTagNamespaceTemplateConfig: dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#compartment_id DataOciIdentityTagStandardTagNamespaceTemplate#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.standardTagNamespaceName">standardTagNamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#standard_tag_namespace_name DataOciIdentityTagStandardTagNamespaceTemplate#standard_tag_namespace_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#id DataOciIdentityTagStandardTagNamespaceTemplate#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#compartment_id DataOciIdentityTagStandardTagNamespaceTemplate#compartment_id}.

---

##### `standardTagNamespaceName`<sup>Required</sup> <a name="standardTagNamespaceName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.standardTagNamespaceName"></a>

```typescript
public readonly standardTagNamespaceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#standard_tag_namespace_name DataOciIdentityTagStandardTagNamespaceTemplate#standard_tag_namespace_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_standard_tag_namespace_template#id DataOciIdentityTagStandardTagNamespaceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates <a name="DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplate } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates: dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList <a name="DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplate } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.get"></a>

```typescript
public get(index: number): DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference <a name="DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityTagStandardTagNamespaceTemplate } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.enumMutability">enumMutability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.isCostTracking">isCostTracking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.possibleValues">possibleValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.tagDefinitionName">tagDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enumMutability`<sup>Required</sup> <a name="enumMutability" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.enumMutability"></a>

```typescript
public readonly enumMutability: string;
```

- *Type:* string

---

##### `isCostTracking`<sup>Required</sup> <a name="isCostTracking" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.isCostTracking"></a>

```typescript
public readonly isCostTracking: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `possibleValues`<sup>Required</sup> <a name="possibleValues" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.possibleValues"></a>

```typescript
public readonly possibleValues: string[];
```

- *Type:* string[]

---

##### `tagDefinitionName`<sup>Required</sup> <a name="tagDefinitionName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.tagDefinitionName"></a>

```typescript
public readonly tagDefinitionName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagStandardTagNamespaceTemplate.DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates">DataOciIdentityTagStandardTagNamespaceTemplateTagDefinitionTemplates</a>

---



