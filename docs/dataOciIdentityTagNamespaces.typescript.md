# `dataOciIdentityTagNamespaces` Submodule <a name="`dataOciIdentityTagNamespaces` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityTagNamespaces <a name="DataOciIdentityTagNamespaces" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces oci_identity_tag_namespaces}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.Initializer"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces(scope: Construct, id: string, config: DataOciIdentityTagNamespacesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig">DataOciIdentityTagNamespacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig">DataOciIdentityTagNamespacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.resetIncludeSubcompartments">resetIncludeSubcompartments</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciIdentityTagNamespacesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter">DataOciIdentityTagNamespacesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeSubcompartments` <a name="resetIncludeSubcompartments" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.resetIncludeSubcompartments"></a>

```typescript
public resetIncludeSubcompartments(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciIdentityTagNamespaces resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isConstruct"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isTerraformElement"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isTerraformDataSource"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.generateConfigForImport"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciIdentityTagNamespaces resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciIdentityTagNamespaces to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciIdentityTagNamespaces that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityTagNamespaces to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList">DataOciIdentityTagNamespacesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.tagNamespaces">tagNamespaces</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList">DataOciIdentityTagNamespacesTagNamespacesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter">DataOciIdentityTagNamespacesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.includeSubcompartmentsInput">includeSubcompartmentsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.includeSubcompartments">includeSubcompartments</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.filter"></a>

```typescript
public readonly filter: DataOciIdentityTagNamespacesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList">DataOciIdentityTagNamespacesFilterList</a>

---

##### `tagNamespaces`<sup>Required</sup> <a name="tagNamespaces" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.tagNamespaces"></a>

```typescript
public readonly tagNamespaces: DataOciIdentityTagNamespacesTagNamespacesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList">DataOciIdentityTagNamespacesTagNamespacesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciIdentityTagNamespacesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter">DataOciIdentityTagNamespacesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeSubcompartmentsInput`<sup>Optional</sup> <a name="includeSubcompartmentsInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.includeSubcompartmentsInput"></a>

```typescript
public readonly includeSubcompartmentsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeSubcompartments`<sup>Required</sup> <a name="includeSubcompartments" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.includeSubcompartments"></a>

```typescript
public readonly includeSubcompartments: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespaces.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityTagNamespacesConfig <a name="DataOciIdentityTagNamespacesConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.Initializer"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityTagNamespacesConfig: dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#compartment_id DataOciIdentityTagNamespaces#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter">DataOciIdentityTagNamespacesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#id DataOciIdentityTagNamespaces#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.includeSubcompartments">includeSubcompartments</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#include_subcompartments DataOciIdentityTagNamespaces#include_subcompartments}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#state DataOciIdentityTagNamespaces#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#compartment_id DataOciIdentityTagNamespaces#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciIdentityTagNamespacesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter">DataOciIdentityTagNamespacesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#filter DataOciIdentityTagNamespaces#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#id DataOciIdentityTagNamespaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeSubcompartments`<sup>Optional</sup> <a name="includeSubcompartments" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.includeSubcompartments"></a>

```typescript
public readonly includeSubcompartments: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#include_subcompartments DataOciIdentityTagNamespaces#include_subcompartments}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#state DataOciIdentityTagNamespaces#state}.

---

### DataOciIdentityTagNamespacesFilter <a name="DataOciIdentityTagNamespacesFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter.Initializer"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityTagNamespacesFilter: dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#name DataOciIdentityTagNamespaces#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#values DataOciIdentityTagNamespaces#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#regex DataOciIdentityTagNamespaces#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#name DataOciIdentityTagNamespaces#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#values DataOciIdentityTagNamespaces#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_tag_namespaces#regex DataOciIdentityTagNamespaces#regex}.

---

### DataOciIdentityTagNamespacesTagNamespaces <a name="DataOciIdentityTagNamespacesTagNamespaces" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespaces"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespaces.Initializer"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

const dataOciIdentityTagNamespacesTagNamespaces: dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespaces = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityTagNamespacesFilterList <a name="DataOciIdentityTagNamespacesFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.Initializer"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.get"></a>

```typescript
public get(index: number): DataOciIdentityTagNamespacesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter">DataOciIdentityTagNamespacesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIdentityTagNamespacesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter">DataOciIdentityTagNamespacesFilter</a>[]

---


### DataOciIdentityTagNamespacesFilterOutputReference <a name="DataOciIdentityTagNamespacesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter">DataOciIdentityTagNamespacesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciIdentityTagNamespacesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesFilter">DataOciIdentityTagNamespacesFilter</a>

---


### DataOciIdentityTagNamespacesTagNamespacesList <a name="DataOciIdentityTagNamespacesTagNamespacesList" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.Initializer"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.get"></a>

```typescript
public get(index: number): DataOciIdentityTagNamespacesTagNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciIdentityTagNamespacesTagNamespacesOutputReference <a name="DataOciIdentityTagNamespacesTagNamespacesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.Initializer"></a>

```typescript
import { dataOciIdentityTagNamespaces } from 'rhizo-co-terraform-provider-oci'

new dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.isRetired">isRetired</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespaces">DataOciIdentityTagNamespacesTagNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isRetired`<sup>Required</sup> <a name="isRetired" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.isRetired"></a>

```typescript
public readonly isRetired: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciIdentityTagNamespacesTagNamespaces;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityTagNamespaces.DataOciIdentityTagNamespacesTagNamespaces">DataOciIdentityTagNamespacesTagNamespaces</a>

---


