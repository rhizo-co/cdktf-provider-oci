# `dataOciMediaServicesMediaWorkflowTaskDeclaration` Submodule <a name="`dataOciMediaServicesMediaWorkflowTaskDeclaration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclaration <a name="DataOciMediaServicesMediaWorkflowTaskDeclaration" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration oci_media_services_media_workflow_task_declaration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowTaskDeclaration } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration(scope: Construct, id: string, config?: DataOciMediaServicesMediaWorkflowTaskDeclarationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig">DataOciMediaServicesMediaWorkflowTaskDeclarationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig">DataOciMediaServicesMediaWorkflowTaskDeclarationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetIsCurrent">resetIsCurrent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetCompartmentId"></a>

```typescript
public resetCompartmentId(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsCurrent` <a name="resetIsCurrent" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetIsCurrent"></a>

```typescript
public resetIsCurrent(): void
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetName"></a>

```typescript
public resetName(): void
```

##### `resetVersion` <a name="resetVersion" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowTaskDeclaration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowTaskDeclaration } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowTaskDeclaration } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowTaskDeclaration } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowTaskDeclaration } from 'rhizo-co-terraform-provider-oci'

dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowTaskDeclaration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowTaskDeclaration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciMediaServicesMediaWorkflowTaskDeclaration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowTaskDeclaration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList">DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrentInput">isCurrentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrent">isCurrent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.items"></a>

```typescript
public readonly items: DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList">DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isCurrentInput`<sup>Optional</sup> <a name="isCurrentInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrentInput"></a>

```typescript
public readonly isCurrentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isCurrent`<sup>Required</sup> <a name="isCurrent" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.isCurrent"></a>

```typescript
public readonly isCurrent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclaration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclarationConfig <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowTaskDeclaration } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowTaskDeclarationConfig: dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#compartment_id DataOciMediaServicesMediaWorkflowTaskDeclaration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#id DataOciMediaServicesMediaWorkflowTaskDeclaration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.isCurrent">isCurrent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#is_current DataOciMediaServicesMediaWorkflowTaskDeclaration#is_current}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#name DataOciMediaServicesMediaWorkflowTaskDeclaration#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#version DataOciMediaServicesMediaWorkflowTaskDeclaration#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#compartment_id DataOciMediaServicesMediaWorkflowTaskDeclaration#compartment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#id DataOciMediaServicesMediaWorkflowTaskDeclaration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isCurrent`<sup>Optional</sup> <a name="isCurrent" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.isCurrent"></a>

```typescript
public readonly isCurrent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#is_current DataOciMediaServicesMediaWorkflowTaskDeclaration#is_current}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#name DataOciMediaServicesMediaWorkflowTaskDeclaration#name}.

---

##### `version`<sup>Optional</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_task_declaration#version DataOciMediaServicesMediaWorkflowTaskDeclaration#version}.

---

### DataOciMediaServicesMediaWorkflowTaskDeclarationItems <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowTaskDeclaration } from 'rhizo-co-terraform-provider-oci'

const dataOciMediaServicesMediaWorkflowTaskDeclarationItems: dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowTaskDeclaration } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get"></a>

```typescript
public get(index: number): DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer"></a>

```typescript
import { dataOciMediaServicesMediaWorkflowTaskDeclaration } from 'rhizo-co-terraform-provider-oci'

new dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchema">parametersSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchemaAllowingReferences">parametersSchemaAllowingReferences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems">DataOciMediaServicesMediaWorkflowTaskDeclarationItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parametersSchema`<sup>Required</sup> <a name="parametersSchema" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchema"></a>

```typescript
public readonly parametersSchema: string;
```

- *Type:* string

---

##### `parametersSchemaAllowingReferences`<sup>Required</sup> <a name="parametersSchemaAllowingReferences" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.parametersSchemaAllowingReferences"></a>

```typescript
public readonly parametersSchemaAllowingReferences: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOciMediaServicesMediaWorkflowTaskDeclarationItems;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowTaskDeclaration.DataOciMediaServicesMediaWorkflowTaskDeclarationItems">DataOciMediaServicesMediaWorkflowTaskDeclarationItems</a>

---



