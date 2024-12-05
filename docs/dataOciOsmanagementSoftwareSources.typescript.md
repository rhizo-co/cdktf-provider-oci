# `dataOciOsmanagementSoftwareSources` Submodule <a name="`dataOciOsmanagementSoftwareSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementSoftwareSources <a name="DataOciOsmanagementSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources oci_osmanagement_software_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources(scope: Construct, id: string, config: DataOciOsmanagementSoftwareSourcesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig">DataOciOsmanagementSoftwareSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig">DataOciOsmanagementSoftwareSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataOciOsmanagementSoftwareSourcesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter">DataOciOsmanagementSoftwareSourcesFilter</a>[]

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.resetState"></a>

```typescript
public resetState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementSoftwareSources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isConstruct"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isTerraformElement"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isTerraformDataSource"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.generateConfigForImport"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciOsmanagementSoftwareSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsmanagementSoftwareSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsmanagementSoftwareSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementSoftwareSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList">DataOciOsmanagementSoftwareSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.softwareSources">softwareSources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList">DataOciOsmanagementSoftwareSourcesSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter">DataOciOsmanagementSoftwareSourcesFilter</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.state">state</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.filter"></a>

```typescript
public readonly filter: DataOciOsmanagementSoftwareSourcesFilterList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList">DataOciOsmanagementSoftwareSourcesFilterList</a>

---

##### `softwareSources`<sup>Required</sup> <a name="softwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.softwareSources"></a>

```typescript
public readonly softwareSources: DataOciOsmanagementSoftwareSourcesSoftwareSourcesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList">DataOciOsmanagementSoftwareSourcesSoftwareSourcesList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataOciOsmanagementSoftwareSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter">DataOciOsmanagementSoftwareSourcesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSources.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementSoftwareSourcesConfig <a name="DataOciOsmanagementSoftwareSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementSoftwareSourcesConfig: dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#compartment_id DataOciOsmanagementSoftwareSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#display_name DataOciOsmanagementSoftwareSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter">DataOciOsmanagementSoftwareSourcesFilter</a>[]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#id DataOciOsmanagementSoftwareSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#state DataOciOsmanagementSoftwareSources#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#compartment_id DataOciOsmanagementSoftwareSources#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#display_name DataOciOsmanagementSoftwareSources#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataOciOsmanagementSoftwareSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter">DataOciOsmanagementSoftwareSourcesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#filter DataOciOsmanagementSoftwareSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#id DataOciOsmanagementSoftwareSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#state DataOciOsmanagementSoftwareSources#state}.

---

### DataOciOsmanagementSoftwareSourcesFilter <a name="DataOciOsmanagementSoftwareSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementSoftwareSourcesFilter: dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#name DataOciOsmanagementSoftwareSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#values DataOciOsmanagementSoftwareSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#regex DataOciOsmanagementSoftwareSources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#name DataOciOsmanagementSoftwareSources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#values DataOciOsmanagementSoftwareSources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_software_sources#regex DataOciOsmanagementSoftwareSources#regex}.

---

### DataOciOsmanagementSoftwareSourcesSoftwareSources <a name="DataOciOsmanagementSoftwareSourcesSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSources.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementSoftwareSourcesSoftwareSources: dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSources = { ... }
```


### DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances <a name="DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

const dataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances: dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementSoftwareSourcesFilterList <a name="DataOciOsmanagementSoftwareSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementSoftwareSourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter">DataOciOsmanagementSoftwareSourcesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsmanagementSoftwareSourcesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter">DataOciOsmanagementSoftwareSourcesFilter</a>[]

---


### DataOciOsmanagementSoftwareSourcesFilterOutputReference <a name="DataOciOsmanagementSoftwareSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.regex">regex</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter">DataOciOsmanagementSoftwareSourcesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.regex"></a>

```typescript
public readonly regex: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataOciOsmanagementSoftwareSourcesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesFilter">DataOciOsmanagementSoftwareSourcesFilter</a>

---


### DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList <a name="DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference <a name="DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances">DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances">DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstances</a>

---


### DataOciOsmanagementSoftwareSourcesSoftwareSourcesList <a name="DataOciOsmanagementSoftwareSourcesSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.get"></a>

```typescript
public get(index: number): DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference <a name="DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.Initializer"></a>

```typescript
import { dataOciOsmanagementSoftwareSources } from 'rhizo-co-terraform-provider-oci'

new dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.archType">archType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.associatedManagedInstances">associatedManagedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList">DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.checksumType">checksumType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.definedTags">definedTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.freeformTags">freeformTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.gpgKeyFingerprint">gpgKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.gpgKeyId">gpgKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.gpgKeyUrl">gpgKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.maintainerEmail">maintainerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.maintainerName">maintainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.maintainerPhone">maintainerPhone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.packages">packages</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.parentId">parentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.parentName">parentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.repoType">repoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSources">DataOciOsmanagementSoftwareSourcesSoftwareSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `archType`<sup>Required</sup> <a name="archType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.archType"></a>

```typescript
public readonly archType: string;
```

- *Type:* string

---

##### `associatedManagedInstances`<sup>Required</sup> <a name="associatedManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.associatedManagedInstances"></a>

```typescript
public readonly associatedManagedInstances: DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList">DataOciOsmanagementSoftwareSourcesSoftwareSourcesAssociatedManagedInstancesList</a>

---

##### `checksumType`<sup>Required</sup> <a name="checksumType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.checksumType"></a>

```typescript
public readonly checksumType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.definedTags"></a>

```typescript
public readonly definedTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.freeformTags"></a>

```typescript
public readonly freeformTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `gpgKeyFingerprint`<sup>Required</sup> <a name="gpgKeyFingerprint" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.gpgKeyFingerprint"></a>

```typescript
public readonly gpgKeyFingerprint: string;
```

- *Type:* string

---

##### `gpgKeyId`<sup>Required</sup> <a name="gpgKeyId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.gpgKeyId"></a>

```typescript
public readonly gpgKeyId: string;
```

- *Type:* string

---

##### `gpgKeyUrl`<sup>Required</sup> <a name="gpgKeyUrl" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.gpgKeyUrl"></a>

```typescript
public readonly gpgKeyUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintainerEmail`<sup>Required</sup> <a name="maintainerEmail" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.maintainerEmail"></a>

```typescript
public readonly maintainerEmail: string;
```

- *Type:* string

---

##### `maintainerName`<sup>Required</sup> <a name="maintainerName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.maintainerName"></a>

```typescript
public readonly maintainerName: string;
```

- *Type:* string

---

##### `maintainerPhone`<sup>Required</sup> <a name="maintainerPhone" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.maintainerPhone"></a>

```typescript
public readonly maintainerPhone: string;
```

- *Type:* string

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.packages"></a>

```typescript
public readonly packages: number;
```

- *Type:* number

---

##### `parentId`<sup>Required</sup> <a name="parentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.parentId"></a>

```typescript
public readonly parentId: string;
```

- *Type:* string

---

##### `parentName`<sup>Required</sup> <a name="parentName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.parentName"></a>

```typescript
public readonly parentName: string;
```

- *Type:* string

---

##### `repoType`<sup>Required</sup> <a name="repoType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.repoType"></a>

```typescript
public readonly repoType: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciOsmanagementSoftwareSourcesSoftwareSources;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementSoftwareSources.DataOciOsmanagementSoftwareSourcesSoftwareSources">DataOciOsmanagementSoftwareSourcesSoftwareSources</a>

---



